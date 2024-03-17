import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js'
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {

    // 1 way
    // down there making use of async await
    // fetch('http://localhost:3000/places')
    //   .then((response) => {
    //     // console.log(response);
    //     return response.json();
    //   })
    //   .then((resData) => {
    //     console.log(resData)
    //     // console.log(resData.places)
    //     setAvailablePlaces(resData.places);
    //   });

    // 2 way
    // async function fetchPlaces() {
    //   setIsFetching(true)
    //   const response = await fetch('http://localhost:3000/places');
    //   const data = await response.json();
    //   setAvailablePlaces(data.places);
    //   setIsFetching(false);
    // }

    // 3 way
    // async function fetchPlaces() {
    //   setIsFetching(true)
    //   const response = await fetch('http://localhost:3000/places');
    //   const data = await response.json();
    //   if(!response.ok) {
    //     const error = new Error('Failed to fetched place data');
    //     throw error;                                      // in this case crash the application
    //   }
    //   setAvailablePlaces(data.places);
    //   setIsFetching(false);
    // }

    // 4 way
    // async function fetchPlaces() {
    //   setIsFetching(true)
    //   const response = await fetch('http://localhost:3000/places');
    //   const data = await response.json();
    //   if(!response.ok) {
    //     throw new Error('Failed to fetched place data');  // in this case crash the application
    //   }
    //   setAvailablePlaces(data.places);
    //   setIsFetching(false);
    // }
        
    // 5 way make use of try and catch
    async function fetchPlaces() {
      setIsFetching(true);
      try {

        // const response = await fetch("http://localhost:3000/places");
        // const data = await response.json();

        // if (!response.ok) {
        //   throw new Error("Failed to fetched place data"); // in this case crash the application
        // }
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            // data.places,
            places,
            position.coords.latitude,
            position.coords.longitude
          )
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        })

        // setAvailablePlaces(data.places);
      } catch (error) {
        setError({message: error.message || "Could not fetch places please try again later"});
        setIsFetching(false);
      }
      // setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if(error) {
    return (
      <Error title="An error occurred" message={error.message} />
    )
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Please Wait Places Are Loading..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
