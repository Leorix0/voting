document.addEventListener('DOMContentLoaded', () => {

    fetchPositions();
  

    function fetchPositions() {
      fetch('http://localhost:5000/positions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'your_secret_api_key', 
        },
      })
        .then(response => response.json())
        .then(positions => {
 
          displayPositions(positions);
        })
        .catch(error => console.error('Error fetching positions:', error));
    }

    function displayPositions(positions) {
      const positionsContainer = document.getElementById('positions-container');
  

      positionsContainer.innerHTML = '';
  
   
      positions.forEach(position => {
        const positionElement = document.createElement('div');
        positionElement.innerHTML = `<h3>${position.name}</h3>`;
        
      
        const candidatesList = document.createElement('ul');
        position.candidates.forEach(candidate => {
          const candidateItem = document.createElement('li');
          candidateItem.textContent = candidate.name;
  
       
          const voteButton = document.createElement('button');
          voteButton.textContent = 'Vote';
          voteButton.addEventListener('click', () => {
            submitVote(position.id, candidate.id);
          });
  
          candidateItem.appendChild(voteButton);
          candidatesList.appendChild(candidateItem);
        });
  
        positionElement.appendChild(candidatesList);
  

        const resultsButton = document.createElement('button');
        resultsButton.textContent = 'Show Results';
        resultsButton.addEventListener('click', () => {
          fetchResults(position.id);
        });
  
        positionElement.appendChild(resultsButton);
        
        positionsContainer.appendChild(positionElement);
      });
    }
  
  
    function submitVote(positionId, candidateId) {
      const userId = 1; // Replace with actual user identification logic
  
      fetch('http://localhost:5000/votes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'your_secret_api_key', 
        },
        body: JSON.stringify({
          positionId,
          candidateId,
          userId,
        }),
      })
        .then(response => response.text())
        .then(message => {
          alert(message);
          fetchPositions(); 
        })
        .catch(error => console.error('Error submitting vote:', error));
    }
  
 
    function fetchResults(positionId) {
      fetch(`http://localhost:5000/results/${positionId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'your_secret_api_key', // Include your authentication key here
        },
      })
        .then(response => response.json())
        .then(results => {
          
          alert(`Results for Position ${positionId}: \n${JSON.stringify(results, null, 2)}`);
        })
        .catch(error => console.error('Error fetching results:', error));
    }
  });