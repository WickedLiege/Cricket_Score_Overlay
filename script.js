async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=f07cd77f-ea73-417b-83d5-4f58083cd55e&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            const relevantData = matchesList.filter(match => match.series_id == "f07cd77f-ea73-417b-83d5-4f58083cd55e").map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();
