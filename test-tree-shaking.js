// Test tree-shaking by importing individual icons
import { Heart } from "./dist/Heart.js";
import { User } from "./dist/User.js";

console.log("Heart component:", Heart);
console.log("User component:", User);

// This should only load 2 small files instead of the entire bundle
