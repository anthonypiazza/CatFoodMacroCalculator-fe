import React from 'react'

const Results = (props) => {

    return(
        <div>
            <div>
                <h1>Dry Matter Breakdown</h1>
                <p>Protein: {Math.round(Number(props.protein)/(100 - Number((props.moisture))) * 100)}% </p>
                <p>Fat: {Math.round(Number(props.fat)/(100 - Number((props.moisture))) * 100)}% </p>
                <p>Carbs: {Math.round((100 - (Number(props.fat) + Number(props.protein) + Number(props.fiber) + Number(props.ash) + Number(props.moisture)))/(100 - Number(props.moisture)) * 100)}% </p>
            </div>
            <div>
                <h1>Caloric Breakdown</h1>
                <p>Protein: {
                    Math.round(
                        (Math.round(Number(props.protein)/(100 - Number(props.moisture)) * 100)* 3.5) /
                        (
                            (Math.round(Number(props.protein)/(100 - Number(props.moisture)) * 100)* 3.5) +
                            (Math.round(Number(props.fat)/(100 - Number(props.moisture)) * 100)* 8.5) +
                            (Math.round((100 - (Number(props.fat) + Number(props.protein) + Number(props.fiber) + Number(props.ash) + Number(props.moisture)))/(100 - Number(props.moisture)) * 100) * 3.5)
                        )*100
                    )
                }% </p>
                <p>Fat: {                    
                    Math.round(
                        (Math.round(Number(props.fat)/(100 - Number(props.moisture)) * 100)* 8.5) /
                        (
                            (Math.round(Number(props.protein)/(100 - Number(props.moisture)) * 100)* 3.5) +
                            (Math.round(Number(props.fat)/(100 - Number(props.moisture)) * 100)* 8.5) +
                            (Math.round((100 - (Number(props.fat) + Number(props.protein) + Number(props.fiber) + Number(props.ash) + Number(props.moisture)))/(100 - Number(props.moisture)) * 100) * 3.5)
                        )*100
                    )
                }% </p>
                <p>Carbs: {
                    Math.round(
                        (Math.round((100 - (Number(props.fat) + Number(props.protein) + Number(props.fiber) + Number(props.ash) + Number(props.moisture)))/(100 - Number(props.moisture)) * 100) * 3.5) /
                        (
                            (Math.round(Number(props.protein)/(100 - Number(props.moisture)) * 100)* 3.5) +
                            (Math.round(Number(props.fat)/(100 - Number(props.moisture)) * 100)* 8.5) +
                            (Math.round((100 - (Number(props.fat) + Number(props.protein) + Number(props.fiber) + Number(props.ash) + Number(props.moisture)))/(100 - Number(props.moisture)) * 100) * 3.5)
                        )*100
                    )
                }% </p>   
                <p>Total kCals: {
                    Math.round(
                        (
                            (Math.round(Number(props.protein)/(100 - Number(props.moisture)) * 100)* 3.5) +
                            (Math.round(Number(props.fat)/(100 - Number(props.moisture)) * 100)* 8.5) +
                            (Math.round((100 - (Number(props.fat) + Number(props.protein) + Number(props.fiber) + Number(props.ash) + Number(props.moisture)))/(100 - Number(props.moisture)) * 100) * 3.5)
                        )
                    )
                } </p>          
            </div>
        </div>
    )
}

export default Results;