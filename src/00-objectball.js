function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  function numPointsScored(playerName) {
    const game = gameObject();
    return game.home.players[playerName]?.points || game.away.players[playerName]?.points;
  }

  
  function shoeSize(playerName) {
    const game = gameObject();
    return game.home.players[playerName]?.shoe || game.away.players[playerName]?.shoe;
  }
  
  function teamColors(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
      return game.home.colors;
    } else if (game.away.teamName === teamName) {
      return game.away.colors;
    }
  }

  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }

  function playerNumbers(teamName) {
    const game = gameObject();
    let numbers = [];
    if (game.home.teamName === teamName) {
      for (let player in game.home.players) {
        numbers.push(game.home.players[player].number);
      }
    } else if (game.away.teamName === teamName) {
      for (let player in game.away.players) {
        numbers.push(game.away.players[player].number);
      }
    }
    return numbers;
  }

  function playerStats(playerName) {
    const game = gameObject();
    return game.home.players[playerName] || game.away.players[playerName];
  }

  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;
  
    // Check both home and away teams for the largest shoe size
    for (let team of [game.home, game.away]) {
      for (let player in team.players) {
        let playerShoeSize = team.players[player].shoe;
        if (playerShoeSize > largestShoeSize) {
          largestShoeSize = playerShoeSize;
          playerWithLargestShoe = player;
        }
      }
    }
  
    return game.home.players[playerWithLargestShoe]?.rebounds || game.away.players[playerWithLargestShoe]?.rebounds;
  }

  function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerWithMostPoints = null;
  
    for (let team of [game.home, game.away]) {
      for (let player in team.players) {
        let points = team.players[player].points;
        if (points > maxPoints) {
          maxPoints = points;
          playerWithMostPoints = player;
        }
      }
    }
  
    return playerWithMostPoints;
  }

  function winningTeam() {
    const game = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
  
    for (let player in game.home.players) {
      homeTeamPoints += game.home.players[player].points;
    }
  
    for (let player in game.away.players) {
      awayTeamPoints += game.away.players[player].points;
    }
  
    return homeTeamPoints > awayTeamPoints ? game.home.teamName : game.away.teamName;
  }

  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
  
    for (let team of [game.home, game.away]) {
      for (let player in team.players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
  
    return longestName;
  }

  function doesLongNameStealATon() {
    const game = gameObject();
    let longestName = playerWithLongestName();
    let maxSteals = 0;
    let playerWithMostSteals = null;
  
    for (let team of [game.home, game.away]) {
      for (let player in team.players) {
        let steals = team.players[player].steals;
        if (steals > maxSteals) {
          maxSteals = steals;
          playerWithMostSteals = player;
        }
      }
    }
  
    return longestName === playerWithMostSteals;
  }
  