document.addEventListener('DOMContentLoaded', () => {
  
    const agencyHeaders = document.querySelectorAll('.contact-agency h4');

    agencyHeaders.forEach(header => {
        header.addEventListener('click', () => {
 
            const agencyBlock = header.closest('.contact-agency');

            const isAlreadyActive = agencyBlock.classList.contains('active');

            agencyHeaders.forEach(otherHeader => {
                const otherBlock = otherHeader.closest('.contact-agency');
                if (otherBlock !== agencyBlock && otherBlock.classList.contains('active')) {
                    otherBlock.classList.remove('active');
                }
            });
            
            if (!isAlreadyActive) {
                agencyBlock.classList.add('active');
            } else {
          
                 agencyBlock.classList.remove('active');
            }


        });
    });
});