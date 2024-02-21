import { useCallback, useRef, useState } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js'
import { useEffect } from 'react';

const storeIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storeIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {

  // Also we move out from the App Component function run once
  // const storeIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
  // const storedPlaces = storeIds.map((id) =>
  //   AVAILABLE_PLACES.find((place) => place.id === id)
  // );

  const modal = useRef();
  const selectedPlace = useRef();
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  // const [pickedPlaces, setPickedPlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);


  // This code will lead to cause the infinite loop
  // navigator.geolocation.getCurrentPosition((position) => {
  //   const sortedPlaces = sortPlacesByDistance(
  //     AVAILABLE_PLACES,
  //     position.coords.latitude,
  //     position.coords.longitude
  //   );

  //   setAvailablePlaces(sortedPlaces);
  // })


  // This code will lead to cause the infinite loop because we omitted the dependencies array from the useEffect() function
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const sortedPlaces = sortPlacesByDistance(
  //       AVAILABLE_PLACES,
  //       position.coords.latitude,
  //       position.coords.longitude
  //     );
  
  //     setAvailablePlaces(sortedPlaces);
  //   });
  // })  // we still would have the infinite loop
  

  // for sorting places based on their latitude and longitude
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
  
      setAvailablePlaces(sortedPlaces);
    });
  },[])


  // for fetching from the local storage
  // And this useEffect not at all recommended and redundant we place  after th App Component function only
  // useEffect( () => {
  //   const storeIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
  //   const storedPlaces = storeIds.map((id) =>
  //     AVAILABLE_PLACES.find((place) => place.id === id)
  //   );

  //   setPickedPlaces(storedPlaces);
  // }, [])


  function handleStartRemovePlace(id) {
    // modal.current.open();
    setModelIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    // modal.current.close();
    setModelIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    // this is also side effect but no need of use of useEffect here
    const storeIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if (storeIds.indexOf(id) === -1) {
      localStorage.setItem("selectedPlaces", JSON.stringify([id, ...storeIds]));
    }
  }

   const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    // modal.current.close();
    setModelIsOpen(false);

    // this is also side effect but no need of use of useEffect here
    const storeIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storeIds.filter((id) => id !== selectedPlace.current))
    );

  }, [])

  return (
    <>
      {/* <Modal ref={modal}> */}
      <Modal open={modelIsOpen} onClose={handleStopRemovePlace}>
        {/* {modelIsOpen && (
          <DeleteConfirmation
            onCancel={handleStopRemovePlace}
            onConfirm={handleRemovePlace}
          />
        )} */}
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          // places={AVAILABLE_PLACES}
          places={availablePlaces}
          fallbackText="Sorting Available Places By Distance ..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
