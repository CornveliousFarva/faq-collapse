const toggles = document.querySelectorAll('.faq-toggle')

// In the above, we define the value with the delcaration of const toggles, then with the document.QuerySelectorAll, we are returning a static list that represents a list of the document's elements that match the specified group of selectors, in this case anything with the class of faq-toggle

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})