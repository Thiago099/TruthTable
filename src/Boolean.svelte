<script>

import {AI} from "./algebra/booleanAI"
const input =$state([
  [1,0,0],
  [0,1,0],
  [1,0,1],
  [0,1,1]
])

const output = $state([
  [0],
  [1],
  [1],
  [0]
])

let error = $state([])


let predOutput = $state([[0],[0],[0],[0]])

let xwidth = $state(3)
let ywidth = $state(1)
let height = $state(4)

function indexArray(length){
    const result = new Array(length)
    for(let i = 0; i < length; i++){
        result[i] = i
    }
    return result
}

function reshape(input, width, height) {
    if (input.length < height) {
        for (let i = input.length; i < height; i++) {
            input.push(new Array(width).fill(0));
        }
    }
    else if (input.length > height) {
        input = input.slice(0, height);
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i].length < width) {
            input[i] = input[i].concat(new Array(width - input[i].length).fill(0));
        } else if (input[i].length > width) {
            input[i] = input[i].slice(0, width);
        }
    }

    return input;
}
let equation = $state("")
function thunk(){
    reshape(input, xwidth, height)
    reshape(output, ywidth, height)
    update()
}
function update(){
    const ai = new AI(input, output)
    equation = ai.ToString()
    predOutput =  input.map(x=>ai.Predict(x))
}
update()



</script>

<table>
    <thead>

        <tr>
            <th colspan={xwidth+ywidth*2}>Truth Table</th>
        </tr>
        <tr>
            <th colspan={xwidth}>Input</th>
            <th colspan={ywidth}>Output</th>
            <th colspan={ywidth}>
                Prediction
            </th>
        </tr>


    </thead>
    <tbody>
        {#each indexArray(height) as y(y)}
            <tr>
                {#each indexArray(xwidth + ywidth * 2) as x(x)}
                    <td class="{x==input[y].length||x==ywidth+input[y].length?"pad-left":""}">
                        {#if x >= (xwidth + ywidth)}
                            {predOutput[y][(x-xwidth-ywidth)] == 1?"1":"0"}
                        {:else if x >= input[y].length}
                            <button onclick={()=>{output[y][x-xwidth] = output[y][x-xwidth] == 1 ? 0 : 1; update()}}>{output[y][x-xwidth] == 1?"1":"0"}</button>
                        {:else}
                            <button onclick={()=>{input[y][x] = input[y][x] == 1 ? 0 : 1; update()}}>{input[y][x] == 1?"1":"0"}</button>
                        {/if}
                    </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
<h3>Equations for each output</h3>

<textarea rows="10" cols="100" bind:value={equation}/>
<div class="floating-menu">

    Input length:
    <input type="number" bind:value={xwidth} onclick={thunk} />
    
    Output length:
    <input type="number" bind:value={ywidth} onclick={thunk} />
    height:
    <input type="number" bind:value={height} onclick={thunk}/>

    <div style="width: 300px;" >
        If there are two inputs that are the same, but thier output
        are different, the prediction will be different from the output as
        is not possible to represent that with an equation
    </div>

</div>

<style>
    .pad-left{
        padding-left: 20px;
    }
    table{
        min-width: 800px;
        min-height:600px;
    }
    .floating-menu{
        position: absolute;
        top:0;
        left:0;
        display: flex;
        flex-direction: column;
    }
    button{
        width: 100%;
        height: 100%;
    }
</style>