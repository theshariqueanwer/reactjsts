const url = 'http://localhost:3000'


export async function fetchAvailablePlaces() {

  const response = await fetch(url+"/places");
  const data = await response.json();

  if (!response.ok) {
    throw new Error("failed to fetched places."); // in this case crash the application
  }

  return data.places;
};

export async function fetchUserPlaces() {

  const response = await fetch(url+"/user-places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("failed to fetched user places."); // in this case crash the application
  }

  return resData.places;
};


export async function updateUserPlaces(places) {
  const response = await fetch(url+"/user-places", {
    method: "PUT",
    // body: JSON.stringify(places),
    // body: JSON.stringify({places:places}),
    body: JSON.stringify({ places }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const responseData = await response.json();

  if(!response.ok) {
    throw new Error("failed to update user places.")
  }

  return responseData.message;
}