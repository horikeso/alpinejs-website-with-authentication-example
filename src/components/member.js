export function member() {
  return {
    isDisplayed: false,
    isInputErrorDisplayed: false,
    member: {
      id: null,
      name: null,
      address: null,
      gender: null,
      age: null,
      authenticatedAt: null,
      createdAt: null,
      remarks: null,
    },
    memberForEdit: {
      id: null,
      name: null,
      address: null,
      gender: null,
      age: null,
      authenticatedAt: null,
      createdAt: null,
      remarks: null,
    },
    inputError: {
      id: "",
      name: "",
      address: "",
      gender: "",
      age: "",
      authenticatedAt: "",
      createdAt: "",
      remarks: "",
    },

    async init() {
      const result = await Alpine.store("api")
        .getClient()
        .get("api-mock/users/1.json");

      if (result.status < 400) {
        // success
        this.member = result.data;
        this.memberForEdit = result.data;
      } else {
        // fail
      }
      // display OK
      this.isDisplayed = true;
    },
    inputName(value) {
      this.memberForEdit.name = value;
      this.verifyInput();
    },
    inputAddress(value) {
      this.memberForEdit.address = value;
      this.verifyInput();
    },
    inputGender(value) {
      this.memberForEdit.gender = value;
      this.verifyInput();
    },
    inputAge(value) {
      console.log(value);
      this.memberForEdit.age = value;
      this.verifyInput();
    },
    inputRemarks(value) {
      this.memberForEdit.remarks = value;
      this.verifyInput();
    },
    verifyInput() {
      this.clearInputError();

      try {
        validate.requiredMaxLength191(this.memberForEdit.name);
      } catch (error) {
        this.isErrorDisplayed = true;
        this.inputError.name = validate.getMessage(error);
      }

      try {
        validate.requiredMaxLength191(this.memberForEdit.address);
      } catch (error) {
        this.isErrorDisplayed = true;
        this.inputError.address = validate.getMessage(error);
      }
    },
    clearInputError() {
      this.isInputErrorDisplayed = false;

      this.inputError.id = "";
      this.inputError.name = "";
      this.inputError.address = "";
      this.inputError.gender = "";
      this.inputError.age = "";
      this.inputError.authenticatedAt = "";
      this.inputError.createdAt = "";
      this.inputError.remarks = "";
    },
  };
}
