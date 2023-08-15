(function () {
  const modalWidget = {
    // Array of URLs to match with corresponding messages
    urlMessages: [
      {
        url: 'https://tidyqa.com/url-modal-widget/',
        elementId: 'what-you-ll-learn',
        message: 'Modal for Intro Page!',
      },
      {
        url: 'https://tidyqa.com/url-modal-widget/demo/',
        elementId: 'demo',
        message: 'Modal for Demo Page!',
      },
      {
        url: 'https://tidyqa.com/url-modal-widget/installation/',
        elementId: 'installation',
        message: 'Modal for Installation Page!',
      },
      // Add more objects for additional URLs and messages
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
      const currentURL = window.location.href;

      const isModalHidden = localStorage.getItem(
        'urlModalWidget_' + currentURL
      );

      const matchedMessage = this.urlMessages.find(
        (urlMessage) =>
          urlMessage.url === currentURL && urlMessage.elementId === elementId
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
        console.log(`Modal placed ${this.modalSettings.position}`);

        // Add event listeners to the hide buttons
        const hideButton = modalElement.querySelector('.hide-page-button');

        hideButton.addEventListener('click', () => {
          this.hideModalForPage();
        });
      }
    },

    // Function to close the modal
    closeModal: function () {
      const modalElement = document.getElementById('modal');
      if (modalElement) {
        modalElement.style.display = 'none';
        modalElement.remove(); // Add this line to remove the modal element
        console.log(`Modal closed`);
      }
    },

    // Function to hide the modal for this page
    hideModalForPage: function () {
      const currentURL = window.location.href;
      localStorage.setItem('urlModalWidget_' + currentURL, 'true');
      this.closeModal();
      console.log(`Modal hidden for URL ${currentURL}`);
    },

    bindModalToElements: function () {
      const currentURL = window.location.href;
      const isModalHidden = localStorage.getItem('urlModalWidget_' + currentURL);
  
      if (!isModalHidden) {
        const matchedMessage = this.urlMessages.find(
          (urlMessage) => urlMessage.url === currentURL
        );
  
        if (matchedMessage) {
          const specificElement = document.querySelector(
            `#${matchedMessage.elementId}`
          );
  
          if (specificElement) {
            const mouseLeaveHandler = () => {
              if (!this.isModalOpen) {
                this.openModalWithMessage(matchedMessage.elementId);
                specificElement.removeEventListener(
                  'mouseleave',
                  mouseLeaveHandler
                );
              }
            };
  
            specificElement.addEventListener('mouseleave', mouseLeaveHandler);
          }
        }
      }
    },

    // Initialize the modal widget
    initialize: function () {
      this.bindModalToElements();
      this.addLinkAndBackListeners();
    },
  };


  // Add event listener for clicks on links and the popstate event (going back in history)
  modalWidget.addLinkAndBackListeners = function () {
    const links = document.querySelectorAll('a');

    links.forEach((link) => {
      link.addEventListener('click', () => {
        modalWidget.closeModal();
      });
    });

    window.addEventListener('popstate', () => {
      modalWidget.closeModal();
    });
  };

  // Initialize the modal widget
  modalWidget.initialize();
})();
