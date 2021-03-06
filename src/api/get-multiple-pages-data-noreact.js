export const getMultiplePagesData = async (url, callback, setErrorMessage) => {
  try{
    const firstPromise = await fetch(`${url}/?page=1`);
    const result = await firstPromise.json();
    let nextUrl = result.next;
    const dataContainer = [...result.results];
    while(nextUrl){
      let promiseRunner = await fetch(`${nextUrl}`);
      let resultRunner = await promiseRunner.json();
      nextUrl = resultRunner.next;
      dataContainer.push(...resultRunner.results);
    }
    callback(dataContainer);
  } catch (error){
    setErrorMessage(error.message + ' url ' + url);
  }
}
