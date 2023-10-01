console.log("chargement terminer !")
console.log("Site crée par royaly#0001, @royaly")

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        for (const entry of entries) {
            console.log(entries)
            if (entry.isIntersecting) {
                entry.target.animate([
                    { transform: 'translateY(-10px)', opacity: 0 },
                    { transform: 'translateY(0px)', opacity: 1 }
                ], {
                    duration: 1000
                })

                observer.unobserve(entry.target)
            }
        }
    })

    observer.observe(document.querySelector('.home-containeur-title'))
    observer.observe(document.querySelector('.home-containeur-img'))
    observer.observe(document.querySelector('.competence-containeur-web'))
    observer.observe(document.querySelector('.competence-containeur-backend'))
    observer.observe(document.querySelector('.project-containeur'))
})