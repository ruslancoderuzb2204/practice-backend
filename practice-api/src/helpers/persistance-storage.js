export const setItem = (key, data) => {
    try {
      localStorage.setItem(key, data);
    } catch (error) {
      console.log("Error Saving Data");
    }
  };
  export const getItem = (key) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.log("Error Getting Data");
    }
  };
  export const deleteItem = (key) =>{
    try {
     localStorage.removeItem(key)
    } catch (error) {
      console.log("error");
    }
  }
  