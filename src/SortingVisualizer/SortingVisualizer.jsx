import React, { useState } from "react";
import {BubbleSortAnimations, SelectionSortAnimations, InsertionSortAnimations, QuickSortAnimations, MergeSortAnimations} from "../SortingAlgorithms/SortingAlgorithms.js"
import "./SortingVisualizer.css";

const animationSpeed = 1;

const barNumbers = 150;

const primary = "#4285F4";

const secondary = "#DE5246";

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            array: [],
            value: false,
            buttons: ["reset", "bubble", "selection", "insertion", "quick", "merge"],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i = 0; i < barNumbers; i++){
            array.push(randomIntFromInterval(5, 520));
        }
        array.push(520);
        this.setState({array: array});
    }

    disableButtons(){
        const array = this.state.buttons;
        for(let i = 0; i < array.length; i++){
            document.getElementById(array[i]).disabled = true;
        }
    }

    restoreButtons(){
        const array = this.state.buttons;
        for(let i = 0; i < array.length; i++){
            document.getElementById(array[i]).removeAttribute("disabled");
        }
    }

    bubbleSort(){
        const animations = BubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 !== 2 && i % 4 !== 3;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? secondary : primary;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * animationSpeed);
            }
        }
        setTimeout(() => this.restoreButtons(), animations.length * animationSpeed);
    }

    selectionSort(){
        const animations = SelectionSortAnimations(this.state.array);
        let color = secondary;
        for(let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][0];
            if (isColorChange) {
                const [flag, barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    color = color === secondary ? primary : secondary;
                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const [flag, barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * animationSpeed);
            }
        }
        setTimeout(() => this.restoreButtons(), animations.length * animationSpeed);
    }

    insertionSort(){
        const animations = InsertionSortAnimations(this.state.array);
        let color = secondary;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][0];
            if (isColorChange) {
                const [flag, barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    color = color === secondary ? primary : secondary;
                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const [flag, barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * animationSpeed);
            }
        }
        setTimeout(() => this.restoreButtons(), animations.length * animationSpeed);
    }

    quickSort(){
        const animations = QuickSortAnimations(this.state.array);
        let color = secondary;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][0];
            if (isColorChange) {
                const [flag, barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    color = color === secondary ? primary : secondary;
                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const [flag, barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * animationSpeed);
            }
        }
        setTimeout(() => this.restoreButtons(), animations.length * animationSpeed);
    }

    mergeSort(){
        const animations = MergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? secondary : primary;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * animationSpeed);
            }
        }
        setTimeout(() => this.restoreButtons(), animations.length * animationSpeed);
    }

    render(){
        const array = this.state.array;
        return(
            <div className="array-container">
                <div id="top">
                    <div>
                        <button id="reset" onClick={() => this.resetArray()}>Generate New Array</button>
                    </div>
                    <div>
                        <button id="bubble" onClick={() => {this.bubbleSort(); this.disableButtons();}}>Bubble Sort</button>
                        <button id="selection" onClick={() => {this.selectionSort(); this.disableButtons();}}>Selection Sort</button>
                        <button id="insertion" onClick={() => {this.insertionSort(); this.disableButtons();}}>Insertion Sort</button>
                        <button id="quick" onClick={() => {this.quickSort(); this.disableButtons();}}>Quick Sort</button>
                        <button id="merge" onClick={() => {this.mergeSort(); this.disableButtons();}}>Merge Sort</button>
                    </div>
                </div>
                    {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                        backgroundColor: primary,
                        height: `${value}px`,
                    }}></div>
                ))}    
            </div>
        );
    }
}


function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}