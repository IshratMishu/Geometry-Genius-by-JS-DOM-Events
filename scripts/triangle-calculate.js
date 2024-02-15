/*
*
*Objective: Get base, height of a triangle. Calculate the area by using the provided formula, and then display the area.
*Step-1: Get base value of the triangle
*Step-2: added an id in the base input field
*Step-3: Use getElementById to access the input field
*Step-4: Get value from the input field. [value is string now]
*Step-5: Convert the value to a number. Use parseFloat()
*
*/

function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
     const triangleBaseText = triangleBaseInput.value ;
     const base = parseFloat(triangleBaseText);
     console.log( base);

    // get triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value ;
    const height = parseFloat(triangleHeightText);
    console.log(height)

    //calculate triangle area
    const area = 0.5 * base * height ;
    console.log('area of the triangle is', area);

    //display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}