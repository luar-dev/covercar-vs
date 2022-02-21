app.component('quote-form', {
    template:
    /*html*/
    `<form action="">
        <h3>Cotiza</h3>
        <label for="name">Name:</label>
        <input id="name" type="text">

        <label for="review">Review:</label>
        <textarea name="" id="review" cols="30" rows="10"></textarea>

        <label for="rating">Rating:</label>
        <select name="" id="rating">
            <option value="">5</option>
            <option value="">4</option>
            <option value="">3</option>
            <option value="">2</option>
            <option value="">1</option>
        </select>

        <input type="submit" value="Submit">
    </form>`,

    data() {
        
    }
})