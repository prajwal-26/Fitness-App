export const exerciseoptions = {
    method: 'GET',
    headers: {

      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '9aebaffb7cmsh41985b191c854e8p1164dcjsn2b156945e791'
    }
  };

export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
     const data = await response.json();
     return data;
}
