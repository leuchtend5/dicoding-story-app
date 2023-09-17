const AddStory = {
  async init() {
    this._initialListener();
  },

  _initialListener() {
    const addStoryForm = document.getElementById('addStoryForm');
    addStoryForm.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        e.stopPropagation();

        addStoryForm.classList.add('was-validated');
        this._sendPost();
      },
      false,
    );
  },

  _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('data confirmed');
      console.log(formData);
    }
  },

  _getFormData() {
    const nameInput = document.getElementById('validationCustomRecordName');
    const descriptionInput = document.getElementById('validationCustomNotes');
    const dateInput = document.getElementById('validationCustomDate');
    const imageInput = document.getElementById('validationCustomEvidence');

    return {
      name: nameInput.value,
      description: descriptionInput.value,
      date: new Date(dateInput.value),
      image: imageInput.files[0],
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },
};

export default AddStory;
