/*!
 * jquery.textarea-maxlength-shim.js v1.0.2 (2013-10-03)
 *
 * Copyright 2013 Massimo Lombardo (@unwiredbrain)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if (!("maxLength" in document.createElement("textarea"))) {
    $("textarea[maxlength]").each(function () {
        var $el = $(this).on("keydown keyup focus blur paste cut", function (event) {
            var keyCode = event.which,
                that = this,
                limit = Math.abs(parseInt($el.attr("maxlength"), 10)) || -1;
            if (keyCode === 13 || keyCode >= 33) {
                if (that.value.length >= limit) {
                    that.value = that.value.substr(0, limit - 1);
                    event.preventDefault();
                }
            }
        });
    });
}
