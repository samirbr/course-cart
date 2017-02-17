(function(HTMLButtonElement, HTMLSelectElement, HTMLInputElement, HTMLFormElement) {
  const validationMessage: string = 'This option is required!';

  interface IFormElement {
    checkValidity(): boolean;
    validationMessage: string;
  }

  if (!HTMLButtonElement.prototype.checkValidity) {
    Object.defineProperties(HTMLButtonElement.prototype, {
      checkValidity: {
        value(): boolean {
          return true;
        }
      },
      validationMessage: {
        value: validationMessage
      },
    });
  }

  if (!HTMLSelectElement.prototype.checkValidity) {
    Object.defineProperties(HTMLSelectElement.prototype, {
      checkValidity: {
        value(): boolean {
          return !this.required || this.selectedIndex !== 0 || this.value !== '';
        }
      },
      validationMessage: {
        value: validationMessage
      },
    });
  }

  if (!HTMLInputElement.prototype.checkValidity) {
    Object.defineProperties(HTMLInputElement.prototype, {
      checkValidity: {
        value(): boolean {
          if (this.required) {
            switch (this.type) {
              case 'email':
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  .test(this.value);

              case 'button':
              case 'submit':
                return true;

              default:
              case 'text':
                return this.value !== '';
            }
          }

          return true;
        }
      },
      validationMessage: {
        value: validationMessage
      },
    });
  }

  if (!HTMLFormElement.prototype.checkValidity) {
    Object.defineProperty(HTMLFormElement.prototype, 'checkValidity', {
      value(): boolean {
        let i: number;
        let valid: boolean;
        let len: number = this.elements.length;

        for (i = 0, valid = true; i < len; i++) {
          valid = valid && (<IFormElement>this.elements[i]).checkValidity();
        }

        return valid;
      }
    });
  }
})(HTMLButtonElement, HTMLSelectElement, HTMLInputElement, HTMLFormElement);
