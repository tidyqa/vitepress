(function () {
  const modalWidget = {
    // Array of element IDs to match with corresponding messages
    elementMessages: [
      {
        elementId: 'what-you-ll-learn',
        message: 'Modal for Intro Page!',
      },
      {
        elementId: 'demo',
        message: 'Modal for Demo Page!',
      },
      {
        elementId: 'installation',
        message: 'Modal for Installation Page!',
      },
      // Add more objects for additional element IDs and messages
    ],

    // Settings
    modalSettings: {
      openModal: true,
      position: 'bottom-right',
    },

    // CSS styles for the modal
    modalStyles: `
        .modal {
            display: none;
            position: fixed;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            z-index: 9999;
            opacity: 0;
            animation: fade-in 1s ease-in-out forwards;
        }
  
        /* Animation for fading in */
        @keyframes fade-in {
          to { opacity: 1; }
        }
  
        /* Position classes */
        .modal-bottom-right { bottom: 20px; right: 20px; }
        .modal-bottom-left { bottom: 20px; left: 20px; }
        .modal-top-right { top: 20px; right: 20px; }
        .modal-top-left { top: 20px; left: 20px; }
        .modal-center { top: 50%; left: 50%; transform: translate(-50%, -50%); }
  
        /* Button container style */
        .button-container {
            margin-top: 15px;
            text-align: right;
        }
  
        /* Hide page button style */
        .hide-page-button {
            padding: 5px 10px;
            background-color: #ff6666;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
    `,

    // Extended openModalWithMessage function
    openModalWithMessage: function (elementId) {
      const matchedMessage = this.elementMessages.find(
        (elementMessage) => elementMessage.elementId === elementId
      );

      if (matchedMessage) {
        const modal = document.createElement('div');
        modal.id = 'modal';
        modal.className = 'modal';
        modal.innerHTML = `
        <style>${this.modalStyles}</style>
        <p>${matchedMessage.message}</p>
        <div class="button-container">
            <button class="hide-page-button">Hide for this page</button>
        </div>
      `;

        document.body.appendChild(modal);

        const modalElement = document.getElementById('modal');
        modalElement.style.display = 'block';
        modalElement.classList.add(`modal-${this.modalSettings.position}`);

        // Add event listeners to the hide buttons
        const hideButton = modalElement.querySelector('.hide-page-button');

        hideButton.addEventListener('click', () => {
          this.hideModalForPage(elementId);
        });
      }
    },

    // Function to close the modal (same as provided)
    closeModal: function () {
      const modalElement = document.getElementById('modal');
      if (modalElement) {
        modalElement.style.display = 'none';
        modalElement.remove();
        console.log(`Modal closed`);
      }
    },

    // Function to hide the modal for this page
    hideModalForPage: function (elementId) {
      const specificElement = document.getElementById(elementId);
      if (specificElement) {
        specificElement.removeEventListener('mouseover', this.mouseOverHandler);
      }

      this.closeModal();
      console.log(`Modal hidden for element ${elementId}`);
    },

    bindModalToElements: function () {
      console.log('bindModalToElements OK');

      window.addEventListener('popstate', () => {
        this.closeModal();
      });

      document.addEventListener('DOMContentLoaded', () => {
        for (const elementMessage of this.elementMessages) {
          const specificElement = document.getElementById(
            elementMessage.elementId
          );

          if (specificElement) {
            console.log('Element found');
            this.mouseOverHandler = () => {
              // Check if the modal is already open
              const modalElement = document.getElementById('modal');
              if (!modalElement) {
                this.openModalWithMessage(elementMessage.elementId);
              }
            };

            specificElement.addEventListener(
              'mouseover',
              this.mouseOverHandler
            );
          }
        }
      });
    },

    // Initialize the modal widget
    initialize: function () {
      console.log('Initialized');
      this.addLinkAndBackListeners();
      this.bindModalToElements();
    },
  };

  // Add event listener for clicks on links and the popstate event (going back in history)
  modalWidget.addLinkAndBackListeners = function () {
    const links = document.querySelectorAll('a');

    links.forEach((link) => {
      link.addEventListener('click', () => {
        this.closeModal();
      });
    });

    window.addEventListener('popstate', () => {
      this.closeModal();
    });
  };

  // Initialize the modal widget
  modalWidget.initialize();


  function generateSlug(keyword) {
    // Convert keyword to lowercase and replace spaces with hyphens
    const slug = keyword.toLowerCase().replace(/ /g, '-');
    
    // Remove non-alphanumeric characters except hyphens
    const cleanedSlug = slug.replace(/[^a-zA-Z0-9-]/g, '');
    
    return cleanedSlug;
}

function createLink(slug, keyword) {
    const link = document.createElement('a');
    link.href = `/articles/${slug}`;
    link.textContent = keyword;
    
    return link;
}

function replaceKeywordsWithLinks(container, keywords) {
    const contentElement = document.querySelector(container);
    const paragraph = contentElement.querySelector('p');
    
    keywords.forEach(keyword => {
        const slug = generateSlug(keyword);
        const regex = new RegExp('\\b' + keyword + '\\b', 'gi');
        paragraph.innerHTML = paragraph.innerHTML.replace(regex, match => {
            return createLink(slug, match).outerHTML;
        });
    });
}

// Example array of longtail keywords and their corresponding slugs
const longtailKeywords = [
    { keyword: "ensuring everyone", slug: "best-hiking-trails" },
    { keyword: "Implement smooth", slug: "healthy-cooking-recipes" },
    { keyword: "Based Modal Widget", slug: "beginners-guide-to-gardening" }
];

// Replace keywords with links within the specified div class
replaceKeywordsWithLinks('.main', longtailKeywords.map(item => item.keyword));


})();
