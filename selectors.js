const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    let seeded = document.getElementsByClassName("seed")
    
    // 2. Get all seedless fruit elements
    // Your code here
    let seedless = document.getElementsByClassName("seedless")

    // 3. Get first seedless fruit element
    // Your code here
    let firstSeedless = seedless[0]

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    let spans = document.getElementsByTagName("span")
    let spansArr = Array.from(spans)
    let elIndex = spansArr.findIndex(span => span.innerText === "you")
    let spanYou = spans[elIndex]   

    // 5. Get all children of element "wrapper"
    // Your code here
    let wrapper = document.getElementById("wrapper");
    let wrapperChildren = wrapper.children

    // 6. Get all odd number list items in the list
    // Your code here
    let liOdd = document.querySelectorAll("li.odd")

    // 7. Get all even number list items in the list
    // Your code here
    let olChildren = document.getElementsByTagName("ol")[0].children
    let liEven = [olChildren[1], olChildren[3]]

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    let companies = document.getElementById("three").children[1].children
    let companiesArr = Array.from(companies)
    let companiesWOclass = companiesArr.filter(company => company.className === "")
    
    // 9. Get "Amazon" list element
    // Your code here
    let amazon = [...document.querySelectorAll("a")]
    .find(a => a.textContent.includes("Amazon"))

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    let lis = document.getElementsByTagName("li")
    let lisUnicorn = [...lis]
        .filter(li =>li.getElementsByClassName("unicorn").length > 0)
    
    debugger
}

window.onload = select;