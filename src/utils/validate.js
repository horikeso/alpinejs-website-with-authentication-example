import v8n from "v8n";

export function validate() {
  return {
    defaultJaMap: {
      null: "必須入力です。",
      empty: "必須入力です。",
      string: "文字で入力してください。",
      integer: "整数で入力してください。",
      number: "数字で入力してください。",
      numeric: "数字で入力してください。",
      pattern: "入力形式が異なります。",
      length: "[0]文字で入力してください。",
      minLength: "[0]文字以上で入力してください。",
      maxLength: "[0]文字以下で入力してください。",
      between: "[0]文字以上[1]文字以下で入力してください。",
      includes: "[0]を含む文字で入力してください。",
    },
    getMessage(error, overwriteMap = {}) {
      // copy and merge
      let messageMap = Object.create(this.defaultJaMap);
      Object.assign(messageMap, overwriteMap);

      let message = messageMap[error.rule.name];
      error.rule.args.forEach((value, index) => {
        message = message.replace(`[${index}]`, value);
      });

      return message;
    },
    requiredMaxLength191(value) {
      return v8n().not.null().not.empty().string().maxLength(191).check(value);
    },
    nullableMaxLength191(value) {
      return v8n()
        .passesAnyOf(
          v8n().null(),
          v8n().not.null().not.empty().string().maxLength(191)
        )
        .check(value);
    },
  };
}
