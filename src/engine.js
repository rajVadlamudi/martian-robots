
function Output(gridCoord, positionCoord, instruct) {
    let grid = gridCoord//[5,3]
    let position = []
    let lostData = []
    let lostDirection = false
    let finalPositions = ""
    let instructions = instruct//["RFRFRFRF","FRRFLLFFRRFLL","LLFFFLFLFL"]
    let positions = positionCoord//[[1,1,"E"],[3,2,"N"],[0,3,"W"]]
    console.log("[Grid]:" + grid)
    console.log("[Positions]:" + positions)
    console.log("[Instructions]:" + instructions)
    function getGeoPosition(pos) {
        let result = pos
        switch (pos) {
            case "NL":
                result = "W";
                break;
            case "NR":
                result = "E";
                break;
            case "SL":
                result = "E";
                break;
            case "SR":
                result = "W";
                break;
            case "EL":
                result = "N";
                break;
            case "ER":
                result = "S";
                break;
            case "WL":
                result = "S";
                break;
            case "WR":
                result = "N";
                break;
        }
        return result;
    }

    function updatePosition() {

        switch (position[2]) {
            case "N":
                if ((position[1] + 1) <= grid[1]) {
                    position[1] += 1;// Y pos
                } else {
                    updateLostPositions()
                }
                break;
            case "S":
                if ((position[1] - 1) >= 0) {
                    position[1] -= 1;// Y pos
                } else {
                    updateLostPositions()
                }
                break;
            case "E":
                if ((position[0] + 1) <= grid[0]) {
                    position[0] += 1;// X pos
                } else {
                    updateLostPositions()
                }
                break;
            case "W":
                if ((position[0] - 1) >= 0) {
                    position[0] -= 1;// X pos
                } else {
                    updateLostPositions()
                }
                break;

        }
    }

    function calculatePosition(code) {
        if (code === "L") {
            const direction = getGeoPosition(position[2] + "L")
            position[2] = direction;
        } else if (code === "R") {
            const direction = getGeoPosition(position[2] + "R")
            position[2] = direction;
        } else {//its F - Forward
            updatePosition();
        }
        console.log(position)
    }

    function executeInstruction(arg) {
        arg.split('').map(function (letter) {
            if (!lostDirection) {
                calculatePosition(letter)
            }
        });
    }

    function updateLostPositions() {
        if (checkLostPositions(position.join('')) === false) {
            lostDirection = true
            lostData.push(position.join(''))
        }
    }

    function checkLostPositions(pos) {
        if (lostData.includes(pos)) {
            return true;
        } else {
            return false
        }
    }

    for (let i in instructions) {
        lostDirection = false
        position = positions[i]
        executeInstruction(instructions[i])
        finalPositions = finalPositions+position[0]+" "+position[1]+" "+position[2]+" "+(checkLostPositions(position.join('')) ? "LOST" : "")+"\n"
        console.log("Lost:" + lostData)
    }
    return finalPositions
}

export default Output


