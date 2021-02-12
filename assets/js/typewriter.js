class TypeWriter {
  constructor(textElement, words, wait = 3000) {
    this.textElement = textElement;
    this.words = words;
    this.text = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
  type() {
    //   Getting Current Word Index..

    const current = this.wordIndex % this.words.length;

    // Getting Full Text of Current Word...
    const fullText = this.words[current];

    // Checking if Deleting...
    if (this.isDeleting) {
      // Remove Character
      this.text = fullText.substring(0, this.text.length - 1);
    } else {
      // Add Character
      this.text = fullText.substring(0, this.text.length + 1);
    }

    // Inserting Text into the element...
    this.textElement.innerHTML = `<span class="text">${this.text}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    this.isDeleting ? (typeSpeed /= 2) : '';

    // If The Word is Complete

    if (!this.isDeleting && this.text === fullText) {
      // Make a Pause at end...
      typeSpeed = this.wait;
      // Change the Value of isDeleting to True
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === '') {
      this.isDeleting = false;
      // Move To the next Word
      this.wordIndex++;
      // Pause Before Start Typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init on DOM Load...

document.addEventListener('DOMContentLoaded', init);

// Init

function init() {
  const textElement = document.querySelector('.text-type');
  const words = JSON.parse(textElement.getAttribute('data-words'));
  const wait = textElement.getAttribute('data-wait');

  // Init TypeWriter...
  new TypeWriter(textElement, words, wait);
}
