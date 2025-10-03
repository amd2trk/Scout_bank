// Search functionality for Scout Bank

// Homepage search - redirect to resources page with query
document.addEventListener("DOMContentLoaded", () => {
  const homeSearchForm = document.querySelector('form[role="search"]')
  const homeSearchInput = document.querySelector("#search")

  if (homeSearchForm && homeSearchInput) {
    homeSearchForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const searchQuery = homeSearchInput.value.trim()
      if (searchQuery) {
        window.location.href = `./resource.html?search=${encodeURIComponent(searchQuery)}`
      } else {
        window.location.href = "./resource.html"
      }
    })
  }

  const resourceSearchInput = document.querySelector('input[placeholder="Search resources"]')
  const cards = document.querySelectorAll(".cards .col-md-6")
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')

  if (resourceSearchInput && cards.length > 0) {
    // Get search query from URL if coming from homepage
    const urlParams = new URLSearchParams(window.location.search)
    const searchParam = urlParams.get("search")
    if (searchParam) {
      resourceSearchInput.value = searchParam
      filterCards()
    }

    resourceSearchInput.addEventListener("input", filterCards)

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", filterCards)
    })
  }

  function filterCards() {
    const searchTerm = resourceSearchInput.value.toLowerCase().trim()
    const selectedFilters = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.nextElementSibling.textContent.toLowerCase().trim())

    let visibleCount = 0

    cards.forEach((card) => {
      const cardLink = card.querySelector("a")
      const cardTitle = card.querySelector(".card-title")
      const cardTags = Array.from(card.querySelectorAll(".tags li")).map((tag) => tag.textContent.toLowerCase().trim())

      const matchesSearch =
        !searchTerm ||
        (cardTitle && cardTitle.textContent.toLowerCase().includes(searchTerm)) ||
        cardTags.some((tag) => tag.includes(searchTerm))

      // Check if card matches selected filters (if any filters are selected)
      const matchesFilters =
        selectedFilters.length === 0 || selectedFilters.some((filter) => cardTags.some((tag) => tag.includes(filter)))

      // Show card only if it matches both search and filters
      if (matchesSearch && matchesFilters) {
        card.style.display = ""
        visibleCount++
      } else {
        card.style.display = "none"
      }
    })

    let noResultsMsg = document.querySelector(".no-results-message")
    if (visibleCount === 0) {
      if (!noResultsMsg) {
        noResultsMsg = document.createElement("div")
        noResultsMsg.className = "no-results-message text-center p-5"
        noResultsMsg.innerHTML =
          '<h4 class="text-navy">No resources found</h4><p class="text-muted">Try adjusting your search or filters</p>'
        document.querySelector(".cards-scroll .row").appendChild(noResultsMsg)
      }
      noResultsMsg.style.display = "block"
    } else if (noResultsMsg) {
      noResultsMsg.style.display = "none"
    }
  }
})
