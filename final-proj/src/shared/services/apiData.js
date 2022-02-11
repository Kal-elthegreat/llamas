import {
    collectionUrl, elementUrl, fetchOptions,
    HTTP_METHOD_POST, HTTP_METHOD_PUT, HTTP_METHOD_DELETE
  } from '../helpers/apiData';
  
  export const createApi = (resourceName) => {
  
    const all = async () => {
      const res = await fetch(collectionUrl(resourceName));
      return res.json();
    };
  
    const append = async resourceData => {
      const res = await fetch(
        collectionUrl(resourceName),
        fetchOptions(HTTP_METHOD_POST, resourceData));
      return res.json();
    };
  
    const replace = async resourceData => {
      const res = await fetch(
        elementUrl(resourceName, resourceData.id),
        fetchOptions(HTTP_METHOD_PUT, resourceData));
      return res.json();
    };
  
    const remove = async resourceId => {
      const res = await fetch(
        elementUrl(resourceName, resourceId),
        fetchOptions(HTTP_METHOD_DELETE));
      return res.json();
    };

    const removeMultiple = async resourceIds => {
      const allPromises = resourceIds.map(id => {
          return(
            new Promise((resolve, reject) => resolve(
              fetch(elementUrl(resourceName,id),
              fetchOptions(HTTP_METHOD_DELETE)))
            )
          )
      })
      return Promise.all(allPromises);
    }

    const removePromise = resourceId => {
      return fetch(
        elementUrl(resourceName, resourceId),
        fetchOptions(HTTP_METHOD_DELETE));
    }

    const allElections = async () => {
      const res = await fetch(collectionUrl(resourceName));
      return res.json();
    }
  
    return {all, append, replace, remove, allElections, removePromise,removeMultiple};
  
  };