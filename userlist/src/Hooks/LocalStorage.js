// localStorageUtils.js

// Function to get items from Local Storage
export const getItemsFromLocalStorage = (key) => {
    try {
      const storedItems = localStorage.getItem(key);
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error('Error retrieving items from Local Storage:', error);
      return [];
    }
  };
  
  // Function to add an item to Local Storage
  export const addItemToLocalStorage = (key, newItem) => {
    try {
        console.log(newItem)
      const storedItems = getItemsFromLocalStorage(key);
      const updatedItems = [...storedItems, newItem];
      localStorage.setItem(key, JSON.stringify(updatedItems));

      alert('Registation Succesful:')
      return true;
    } catch (error) {
      console.error('Error adding item to Local Storage:', error);
      alert('Error adding item to Local Storage:')
      return false;
    }
  };
  
  // Function to update an item in Local Storage
  export const updateItemInLocalStorage = (key, updatedItem) => {
    try {
      const storedItems = getItemsFromLocalStorage(key);
      const updatedItems = storedItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
      localStorage.setItem(key, JSON.stringify(updatedItems));
      return updatedItems;
    } catch (error) {
      console.error('Error updating item in Local Storage:', error);
      return [];
    }
  };
  
  // Function to delete an item from Local Storage
  export const deleteItemFromLocalStorage = (key, itemId) => {
    try {
      const storedItems = getItemsFromLocalStorage(key);
      const updatedItems = storedItems.filter((item) => item.id !== itemId);
      localStorage.setItem(key, JSON.stringify(updatedItems));
      return updatedItems;
    } catch (error) {
      console.error('Error deleting item from Local Storage:', error);
      return [];
    }
  };
  