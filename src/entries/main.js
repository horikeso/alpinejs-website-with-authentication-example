import Alpine from "alpinejs";
import dayjs from "dayjs";
import _keyBy from "lodash/keyBy";

import { registerAPIStore } from "../stores/api.js";
import { registerAuthStore } from "../stores/auth.js";

import { auth } from "../components/auth.js";
import { member } from "../components/member.js";

import { validate } from "../utils/validate.js";

registerAPIStore(Alpine);
registerAuthStore(Alpine);

window.auth = auth;
window.member = member;
window.Alpine = Alpine;

window.dayjs = dayjs;
window._keyBy = _keyBy;
window.validate = validate();

queueMicrotask(() => {
  Alpine.start();
});
