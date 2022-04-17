import {hello} from "./other";

class embedAll {
   start() {
      hello();
   }
   stop() {}

   load() {}
   observer() {}
}

module.exports = embedAll