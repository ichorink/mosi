let svg = (className, width, height, inner) => {
    return `<svg class="${className}" viewBox="0 0 ${width} ${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">${inner}`
}

let icons = {
    'logo': svg('logo', 209, 80, `<path d="M0.397,73.644l0,-41.754c0,-1.534 0.786,-2.776 2.356,-3.726c1.571,-0.949 3.599,-1.424 6.083,-1.424c2.045,0 3.799,0.475 5.26,1.424c1.461,0.95 2.192,2.192 2.192,3.726l0,2.521c3.141,-5.553 7.963,-8.329 14.465,-8.329c2.923,0 5.535,1.005 7.836,3.014c2.301,2.009 4,4.657 5.096,7.945c1.826,-3.58 4.201,-6.301 7.123,-8.164c2.923,-1.863 6.028,-2.795 9.315,-2.795c5.48,0 10.174,2.082 14.082,6.247c3.909,4.164 5.863,9.753 5.863,16.767l0,24.548c0,1.315 -0.84,2.52 -2.52,3.616c-1.68,1.096 -3.69,1.644 -6.027,1.644c-2.192,0 -4.147,-0.548 -5.863,-1.644c-1.717,-1.096 -2.576,-2.301 -2.576,-3.616l0,-24.548c0,-2.63 -0.73,-4.676 -2.192,-6.137c-1.461,-1.461 -3.178,-2.192 -5.15,-2.192c-1.9,0 -3.544,0.731 -4.932,2.192c-1.388,1.461 -2.082,3.507 -2.082,6.137l0,24.657c0,1.681 -0.84,2.959 -2.521,3.836c-1.68,0.877 -3.689,1.315 -6.027,1.315c-2.192,0 -4.146,-0.438 -5.863,-1.315c-1.717,-0.877 -2.575,-2.155 -2.575,-3.836l0,-24.548c0,-2.557 -0.749,-4.584 -2.247,-6.082c-1.498,-1.497 -3.233,-2.246 -5.205,-2.246c-1.9,0 -3.525,0.712 -4.877,2.137c-1.352,1.424 -2.027,3.452 -2.027,6.082l0,24.548c0,1.315 -0.859,2.52 -2.576,3.616c-1.717,1.096 -3.708,1.644 -5.972,1.644c-2.411,0 -4.42,-0.53 -6.028,-1.589c-1.607,-1.059 -2.411,-2.283 -2.411,-3.671Z" /><path d="M96.397,11.507c0,-2.192 0.914,-3.799 2.74,-4.822l11.397,-6.137c0.731,-0.365 1.352,-0.548 1.863,-0.548c0.512,0 1.133,0.183 1.863,0.548l11.398,6.137c1.826,1.023 2.739,2.63 2.739,4.822c0,1.315 -0.329,2.484 -0.986,3.507c-0.658,1.023 -1.461,1.534 -2.411,1.534c-0.365,0 -0.767,-0.11 -1.205,-0.329l-11.398,-6.137l-11.397,6.137c-0.438,0.219 -0.84,0.329 -1.205,0.329c-0.95,0 -1.754,-0.511 -2.411,-1.534c-0.658,-1.023 -0.987,-2.192 -0.987,-3.507Z" /><path d="M87.521,56.767l0,-7.671c0,-6.21 2.447,-11.598 7.342,-16.164c4.895,-4.567 10.74,-6.85 17.534,-6.85c6.722,0 12.566,2.265 17.535,6.795c4.968,4.529 7.452,9.936 7.452,16.219l0,7.671c0,6.137 -2.503,11.544 -7.507,16.219c-5.005,4.676 -10.831,7.014 -17.48,7.014c-6.648,0 -12.456,-2.338 -17.424,-7.014c-4.968,-4.675 -7.452,-10.082 -7.452,-16.219Zm16.986,0c0,2.192 0.767,4.146 2.301,5.863c1.534,1.717 3.397,2.575 5.589,2.575c2.192,0 4.073,-0.858 5.644,-2.575c1.571,-1.717 2.356,-3.671 2.356,-5.863l0,-7.671c0,-2.119 -0.803,-4.018 -2.411,-5.699c-1.607,-1.68 -3.47,-2.52 -5.589,-2.52c-2.118,0 -3.963,0.84 -5.534,2.52c-1.571,1.681 -2.356,3.58 -2.356,5.699l0,7.671Z" /><path d="M142.644,69.918c0,-1.534 0.548,-3.16 1.644,-4.877c1.096,-1.717 2.411,-2.575 3.945,-2.575c0.877,0 1.954,0.402 3.233,1.205c1.278,0.804 2.886,1.626 4.822,2.466c1.936,0.84 4.182,1.26 6.739,1.26c4.53,0 6.795,-1.205 6.795,-3.616c0,-1.315 -0.877,-2.393 -2.63,-3.233c-1.754,-0.84 -3.891,-1.553 -6.411,-2.137c-2.521,-0.585 -5.041,-1.352 -7.562,-2.301c-2.52,-0.95 -4.657,-2.521 -6.411,-4.713c-1.753,-2.192 -2.63,-5.004 -2.63,-8.438c0,-4.676 1.644,-8.658 4.932,-11.945c3.287,-3.288 8.511,-4.932 15.671,-4.932c4.895,0 9.224,0.749 12.986,2.247c3.763,1.497 5.644,3.379 5.644,5.644c0,1.461 -0.585,3.159 -1.753,5.095c-1.169,1.937 -2.631,2.905 -4.384,2.905c-0.731,0 -2.411,-0.548 -5.041,-1.644c-2.63,-1.096 -5.041,-1.644 -7.233,-1.644c-2.046,0 -3.598,0.347 -4.658,1.041c-1.059,0.694 -1.589,1.516 -1.589,2.466c0,1.096 0.895,1.972 2.685,2.63c1.79,0.657 3.946,1.297 6.466,1.918c2.521,0.621 5.041,1.424 7.562,2.411c2.52,0.986 4.676,2.666 6.466,5.041c1.789,2.374 2.684,5.351 2.684,8.931c0,5.261 -1.844,9.388 -5.534,12.384c-3.689,2.995 -8.895,4.493 -15.616,4.493c-5.699,0 -10.594,-1.005 -14.685,-3.014c-4.092,-2.009 -6.137,-4.365 -6.137,-7.068Z" /><path d="M194.37,14.356c-1.754,-1.607 -2.63,-3.47 -2.63,-5.589c0,-2.119 0.876,-3.945 2.63,-5.479c1.753,-1.535 3.872,-2.302 6.356,-2.302c2.411,0 4.493,0.767 6.247,2.302c1.753,1.534 2.63,3.36 2.63,5.479c0,2.119 -0.877,3.964 -2.63,5.534c-1.754,1.571 -3.836,2.357 -6.247,2.357c-2.484,0 -4.603,-0.768 -6.356,-2.302Z" /><path d="M192.288,73.644l0,-41.754c0,-1.534 0.785,-2.776 2.356,-3.726c1.571,-0.949 3.598,-1.424 6.082,-1.424c2.411,0 4.438,0.475 6.082,1.424c1.644,0.95 2.466,2.192 2.466,3.726l0,41.754c0,1.315 -0.84,2.52 -2.521,3.616c-1.68,1.096 -3.689,1.644 -6.027,1.644c-2.411,0 -4.42,-0.53 -6.027,-1.589c-1.608,-1.059 -2.411,-2.283 -2.411,-3.671Z" />`),
    'add': svg('icon', 48, 48, `<path d="M24.031,15.393l0,17.214" /><path d="M32.638,24l-17.213,0" /><circle cx="23.955" cy="23.748" r="19.5" />`),
    'back': svg('icon', 48, 48, `<path d="M39,24l-27.89,0" /><g><path d="M20.085,33l-8.975,-9" /><path d="M20.109,15l-8.975,9" /></g></svg>`),
    'behavior': svg('icon', 48, 48, `<path d="M12,32.598c-4.857,-2.647 -8,-6.858 -8,-11.598c0,-8.003 8.962,-14.5 20,-14.5c11.038,0 20,6.497 20,14.5c0,8.003 -8.962,14.5 -20,14.5c-1.02,0 -2.021,-0.055 -3,-0.162" /><path d="M12,32.898l-3,8.602l12,-6.146" />`),
    'clear': svg('icon', 48, 48, `<rect x="4.5" y="4.5" width="39" height="39" /><path d="M16.349,16.5l15,15" /><path d="M31.349,16.5l-15,15" />`),
    'colors': svg('icon', 48, 48, `<path d="M6.415,27.418c0,-9.934 8.066,-18 18,-18c9.935,0 18,8.066 18,18" /><path d="M6.415,27.418l0,3.581" /><path d="M42.415,27.418l0,3.581" /><path d="M10.952,26.418c0.512,-6.984 6.349,-12.5 13.463,-12.5c7.451,0 13.5,6.049 13.5,13.5" /><path d="M15.415,27.418c0,-4.967 4.033,-9 9,-9c4.629,0 8.447,3.503 8.945,8" /><path d="M19.915,27.418c0,-2.483 2.017,-4.5 4.5,-4.5c2.484,0 4.5,2.017 4.5,4.5" /><path d="M19.915,27.418l0,3.581" /><path d="M28.915,27.418l0,3.581" /><path d="M6.585,31.63c-0.005,-0.086 -0.007,-0.172 -0.007,-0.258c0,-2.734 2.219,-4.954 4.953,-4.954c1.83,0 3.429,0.994 4.287,2.472c0.213,-0.054 0.437,-0.082 0.667,-0.082c1.487,0 2.7,1.185 2.744,2.662c1.546,0.411 2.686,1.821 2.686,3.495c0,1.996 -1.62,3.617 -3.616,3.617c-1.011,0 -1.924,-0.415 -2.581,-1.084c-0.755,0.671 -1.75,1.079 -2.838,1.079c-0.975,0 -1.874,-0.327 -2.593,-0.877c-0.633,0.549 -1.458,0.882 -2.361,0.882c-1.989,0 -3.605,-1.616 -3.605,-3.605c0,-1.516 0.938,-2.814 2.264,-3.347Z" /><path d="M29.179,31.63c-0.005,-0.086 -0.007,-0.172 -0.007,-0.258c0,-2.734 2.219,-4.954 4.953,-4.954c1.83,0 3.429,0.994 4.287,2.472c0.213,-0.054 0.437,-0.082 0.667,-0.082c1.487,0 2.7,1.185 2.744,2.662c1.546,0.411 2.686,1.821 2.686,3.495c0,1.996 -1.62,3.617 -3.616,3.617c-1.011,0 -1.925,-0.415 -2.581,-1.084c-0.755,0.671 -1.75,1.079 -2.838,1.079c-0.975,0 -1.874,-0.327 -2.593,-0.877c-0.633,0.549 -1.458,0.882 -2.361,0.882c-1.989,0 -3.605,-1.616 -3.605,-3.605c0,-1.516 0.937,-2.814 2.264,-3.347Z" />`),
    'delete': svg('icon', 48, 48, `<path d="M10.813,16.583l0,27l27,0l0,-27" /><path d="M40.813,8.583l-33,0l0,8l33,0l0,-8Z" /><path d="M29.313,8.583l0,-4l-10,0l0,4" /><path d="M17.813,22.583l0,14.003" /><path d="M24.313,22.583l0,14.003" /><path d="M31.052,22.624l0,14.003" />`),
    'duplicate': svg('icon', 48, 48, `<path d="M17.063,12.423l0,-7.111l26,0l0,26l-8.112,0" /><rect x="4.951" y="16.423" width="26" height="26" />`),
    'export': svg('icon', 48, 48, `<path d="M17.15,22.651l-12.65,0l0,20.927l39,0l0,-20.927l-12.822,0" /><path d="M24,33.5l0,-28.04" /><g><path d="M15,14.41l9,-8.975" /><path d="M33,14.435l-9,-8.975" /></g></svg>`),
    'flip-h': svg('icon', 48, 48, `<path d="M41.269,24l-34.635,0" /><g><path d="M15.609,33l-8.975,-9" /><path d="M15.633,15l-8.975,9" /></g><g><path d="M32.294,15l8.975,9" /><path d="M32.27,33l8.975,-9" /></g></svg>`),
    'flip-v': svg('icon', 48, 48, `<path d="M23.952,6.683l0,34.634" /><g><path d="M32.952,32.343l-9,8.974" /><path d="M14.952,32.318l9,8.975" /></g><g><path d="M14.952,15.657l9,-8.974" /><path d="M32.952,15.682l-9,-8.975" /></g></svg>`),
    'gif': svg('icon', 48, 48, `<path d="M16.5,4.5l-12,0l0,12" /><path d="M4.5,31.5l0,12l12,0" /><path d="M31.5,43.5l12,0l0,-12" /><path d="M43.5,16.5l0,-12l-12,0" /><circle cx="24" cy="24" r="9" />`),
    'import': svg('icon', 48, 48, `<path d="M24,9.5l0,28.5" /><path d="M17.15,22.651l-12.65,0l0,20.927l39,0l0,-20.927l-12.822,0" /><g><path d="M33,29.025l-9,8.975" /><path d="M15,29l9,8.975" /></g></svg>`),
    'item': svg('icon', 48, 48, `<path d="M37.419,14.636c3.071,0 5.565,2.494 5.565,5.566c0,3.071 -2.494,5.565 -5.565,5.565c-0.337,0 -0.667,-0.03 -0.987,-0.088" /><path d="M36.685,11.636l0,6.522c0,8.399 -6.819,15.218 -15.218,15.218c-8.398,0 -15.217,-6.819 -15.217,-15.218l0,-6.522l30.435,0Z" /><path d="M6.25,38.096l30.435,0" />`),
    'music': svg('icon', 48, 48, `<circle cx="34.743" cy="33.082" r="6" /><circle cx="13.257" cy="33.082" r="6" /><path d="M19.257,33.082l0,-20.957" /><path d="M40.743,33.082l0,-20.957" /><rect x="19.257" y="8.918" width="21.486" height="7.615" />`),
    'play': svg('icon', 48, 48, `<path d="M34,24l-16,9.714l0,-19.428l16,9.714Z" /><rect x="4.5" y="4.5" width="39" height="39" />`),
    'random': svg('icon', 48, 48, `<path d="M24,4.5l16.887,9.75l0,19.5l-16.887,9.75l-16.887,-9.75l0,-19.5l16.887,-9.75Z" /><path d="M12.113,17.137l11.887,6.863" /><path d="M35.887,17.137l-11.887,6.863" /><path d="M24,24l0,14.5" /><circle cx="24" cy="14.323" r="1"/><circle cx="29.954" cy="27.323" r="1"/><circle cx="35.593" cy="30.243" r="1"/><circle cx="18.426" cy="34.243" r="1"/><circle cx="12.262" cy="23.323" r="1"/><circle cx="15.344" cy="28.783" r="1"/>`),
    'remove': svg('icon', 48, 48, `<path d="M32.607,24l-17.214,0" /><circle cx="23.923" cy="23.748" r="19.5" />`),
    'rotate': svg('icon', 48, 48, `<path d="M38.541,24c0,8.025 -6.516,14.541 -14.541,14.541c-8.025,0 -14.541,-6.516 -14.541,-14.541c0,-8.025 6.516,-14.541 14.541,-14.541c4.013,0 7.648,1.629 10.28,4.261" /><path d="M34.297,13.761l3.759,3.759" /><path d="M38.056,4.809l-0.017,12.71" /><path d="M25.311,17.52l12.711,-0.018" /></svg>`),
    'settings': svg('icon', 48, 48, `<path d="M27.159,4.758c-2.092,-0.344 -4.226,-0.344 -6.318,0l-0.995,5.121c-1.535,0.451 -2.986,1.15 -4.297,2.069l-4.624,-2.415c-1.573,1.421 -2.903,3.09 -3.939,4.939l3.384,3.971c-0.605,1.482 -0.963,3.052 -1.062,4.65l-4.771,2.109c0.131,2.116 0.606,4.197 1.406,6.16l5.214,-0.17c0.782,1.396 1.786,2.656 2.973,3.729l-1.325,5.045c1.736,1.217 3.658,2.143 5.692,2.741l3.118,-4.182c1.58,0.26 3.19,0.26 4.77,0l3.118,4.182c2.034,-0.598 3.956,-1.524 5.692,-2.741l-1.325,-5.045c1.187,-1.073 2.191,-2.333 2.973,-3.729l5.214,0.17c0.8,-1.963 1.275,-4.044 1.406,-6.16l-4.771,-2.109c-0.099,-1.598 -0.457,-3.168 -1.062,-4.65l3.384,-3.971c-1.036,-1.849 -2.366,-3.518 -3.939,-4.939l-4.624,2.415c-1.311,-0.919 -2.762,-1.618 -4.297,-2.069l-0.995,-5.121Zm-3.159,10.829c4.644,0 8.413,3.769 8.413,8.413c0,4.644 -3.769,8.413 -8.413,8.413c-4.644,0 -8.413,-3.769 -8.413,-8.413c0,-4.644 3.769,-8.413 8.413,-8.413Z" />`),
    'sprites': svg('icon', 48, 48, `<path d="M22.645,27.068c0,0.449 0.717,0.814 1.601,0.814c0.884,0 1.602,-0.365 1.602,-0.814" /><path d="M6.232,24.529" /><path d="M6.023,23.999c0,-9.65 8.058,-17.484 17.983,-17.484c9.925,0 17.983,7.834 17.983,17.484c0,0 0.705,12.513 -5.289,15.427c-5.995,2.914 -20.275,2.571 -25.388,0c-6.112,-3.073 -5.289,-15.427 -5.289,-15.427" /><circle cx="17.942" cy="21.35" r="1.5"/><circle cx="30.55" cy="21.35" r="1.5"/>`),
    'transparent': svg('icon', 48, 48, `<path d="M15.211,17.269c-0.098,0.667 -0.148,1.349 -0.148,2.043c0,0.579 0.035,1.15 0.104,1.712" /><path d="M15.434,22.527c0.267,1.133 0.671,2.213 1.195,3.221" /><path d="M17.469,27.157c0.69,1.017 1.51,1.939 2.437,2.742" /><path d="M20.968,30.732c1.008,0.716 2.114,1.302 3.295,1.734" /><path d="M25.578,32.874c1.114,0.286 2.282,0.438 3.485,0.438c0.086,0 0.172,-0.001 0.258,-0.003c0.208,-0.004 0.415,-0.012 0.62,-0.025" /><path d="M36.71,31.038c3.824,-2.501 6.353,-6.821 6.353,-11.726c0,-7.727 -6.273,-14 -14,-14c-4.273,0 -8.101,1.918 -10.67,4.939" /><circle cx="18.951" cy="28.423" r="14"/>`),
    'wall': svg('icon', 48, 48, `<path d="M24,4.5l16.887,9.75l0,19.5l-16.887,9.75l-16.887,-9.75l0,-19.5l16.887,-9.75Z" /><path d="M12.113,17.137l11.887,6.863" /><path d="M35.887,17.137l-11.887,6.863" /><path d="M24,24l0,14.5" />`),
    'world': svg('icon', 48, 48, `<circle cx="24" cy="24" r="19.5" /><path d="M8.588,12.659c0,0.514 0.208,1.494 2.824,2.612c1.671,0.713 3.773,0.869 5.734,0.539c3.375,-0.568 5.605,-3.631 8.929,-4.275c3.369,-0.653 5.734,0.238 8.898,0.887c1.614,0.331 2.695,-0.758 3.983,-0.758" /><path d="M4.616,25.002c0,-0.528 2.248,-1.065 2.525,-1.138c2.519,-0.658 5.033,-1.145 7.651,-1.145c0.534,0 2.285,-0.26 2.579,0.456c0.458,1.117 -0.88,2.235 -1.523,2.931c-1.465,1.587 -3.259,2.942 -5.219,3.86c-0.847,0.397 -2.561,0.814 -3.213,1.455" /><path d="M8.913,35.856c0.199,0.199 1.267,-0.27 1.499,-0.34c1.45,-0.437 2.592,-1.001 3.88,-1.719c2.96,-1.651 5.238,-3.661 6.903,-6.668c1.025,-1.851 1.515,-5.198 3.401,-6.456c2.039,-1.359 5.596,-1.464 7.913,-0.764c1.487,0.45 2.792,1.475 4.337,1.875c1.389,0.359 2.255,-0.656 3.372,-1.125c0.639,-0.269 1.553,-0.463 2.04,-0.959" /><path d="M17.428,41.59c-0.039,0 0.465,-0.626 0.625,-0.754c0.506,-0.404 1.029,-0.758 1.551,-1.114c1.668,-1.137 3.445,-1.895 5.254,-2.642c4.96,-2.048 12.104,0.195 16.005,-3.769" /><path d="M35.764,26.2c0,-0.234 -1.357,-0.115 -1.529,-0.125c-0.286,-0.018 -0.262,-0.032 -0.57,-0.032c-0.309,0 -0.284,-0.016 -0.57,-0.032c-2.295,-0.128 -4.669,-0.197 -6.461,1.387c-0.581,0.513 -1.294,1.615 -0.965,2.438c0.367,0.917 1.813,1.39 2.686,1.506c2.581,0.343 4.674,-0.488 7.048,-1.381c1.138,-0.428 3.037,-1.23 2.677,-2.85c-0.138,-0.62 -1.41,-0.571 -1.739,-0.9" />`)
}

let icon = (iconName) => {
    let icon = icons[iconName]
    return div({
        class: 'icon-container',
        dangerouslySetInnerHTML: !icon ? null : {
            __html: icon
        }
    })
}

let iconButton = (props, iconName) => {
    let icon = icons[iconName]
    if (!icon) return button(props)
    props.dangerouslySetInnerHTML = {__html: icon}
    return button(props)
}