// code your solution here
function saturdayFun(activity = "roller-skate")
{
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("play soccer"));


//LAB 2

const mondayWork = function(activity = "go to the office")
{
    return `This Monday, I will ${activity}.`;
};

console.log(mondayWork());

//LAB 3

function wrapAdjective(flair = "someone")
{
    return function(adjective = "great") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}