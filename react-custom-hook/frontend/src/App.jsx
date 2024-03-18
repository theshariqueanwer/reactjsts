import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { fetchUserPlaces, updateUserPlaces } from './http.js';
import Error from './components/Error.jsx';
import { useFetch } from './hooks/useFetch.js';

// function fetchData() {
//   useEffect(() => {
//     async function fetchPlaces() {
//       setIsFetching(true);
//       try {
//         const places = await fetchUserPlaces();
//         setUserPlaces(places);
//       } catch (error) {
//         setError({ message: error.message || 'Failed to fetch user places.' });
//       }

//       setIsFetching(false);
//     }

//     fetchPlaces();
//   }, []);
// }
// This above function will not execute because useEffect and useState are not directly inside the component function
// So the above solution will not work for making the generic to reuse in the different components
// so just revert back to the original and make use of the custom hook for this

function App() {
  const selectedPlace = useRef();

  // const [userPlaces, setUserPlaces] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);
  // const [error, setError] = useState();

  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // useEffect(() => {
  //   async function fetchPlaces() {
  //     setIsFetching(true);
  //     try {
  //       const places = await fetchUserPlaces();
  //       setUserPlaces(places);
  //     } catch (error) {
  //       setError({ message: error.message || 'Failed to fetch user places.' });
  //     }

  //     setIsFetching(false);
  //   }

  //   fetchPlaces();
  // }, []);

  // fetchData();

  // const [isFetching, error, fetchedData] = useFetch(fetchUserPlaces, "Failed to fetch user places");
  // const [isFetching, error, fetchedData: userPlaces] = useFetch(fetchUserPlaces, "Failed to fetch user places");

  // const {isFetching, error, fetchedData} = useFetch(fetchUserPlaces, "Failed to fetch user places");
  // const {isFetching, error, fetchedData: userPlaces} = useFetch(fetchUserPlaces, "Failed to fetch user places", []);
  
  // const [isFetching, error, { fetchedData: userPlaces } ] = useFetch(
  //   fetchUserPlaces,
  //   [],
  //   "Failed to fetch user places"
  // );
  // not working the above because of the alias name

  const {
    isFetching,
    error,
    fetchedData: userPlaces,
    setFetchedData: setUserPlaces
  } = useFetch(fetchUserPlaces, [], "Failed to fetch user places");

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    // await updateUserPlaces([selectedPlace, ...userPlaces]);

    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({
        message: error.message || 'Failed to update places.',
      });
    }
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter(
          (place) => place.id !== selectedPlace.current.id
        )
      );

      try {
        await updateUserPlaces(
          userPlaces.filter((place) => place.id !== selectedPlace.current.id)
        );
      } catch (error) {
        setUserPlaces(userPlaces);
        setErrorUpdatingPlaces({
          message: error.message || 'Failed to delete place.',
        });
      }

      setModalIsOpen(false);
    },
    [userPlaces, setUserPlaces]
  );

  function handleError() {
    setErrorUpdatingPlaces(null);
  }

  return (
    <>
      <Modal open={errorUpdatingPlaces} onClose={handleError}>
        {errorUpdatingPlaces && (
          <Error
            title="An error occurred!"
            message={errorUpdatingPlaces.message}
            onConfirm={handleError}
          />
        )}
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
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
        {error && <Error title="An error occurred!" message={error.message} />}
        {!error && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            isLoading={isFetching}
            loadingText="Fetching your places..."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces 
          onSelectPlace={handleSelectPlace} 
        />
      </main>
    </>
  );
}

export default App;
