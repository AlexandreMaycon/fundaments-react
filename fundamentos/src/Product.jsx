import React from 'react'

export const Product = () => {

    return(
        <>
            <form>
                <label>
                    <input
                    type="radio"
                    value="notebook"
                    checked={radio === 'notebook'}
                    onChange={handleChange}
                    />
                    Notebook
                </label>
                <label>
                    <input
                    type="radio"
                    value="smartphone"
                    checked={radio === 'smartphone'}
                    onChange={handleChange}
                    />
                    Smartphone
                </label>
                <label>
                    <input
                    type="radio"
                    value="tablet"
                    checked={radio === 'tablet'}
                    onChange={handleChange}
                    />
                    Tablet
                </label>
            </form>
        </>
    )
}
