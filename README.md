# XFL.js

XFL.js is a JavaScript/TypeScript library for handling numbers in [XFL](https://github.com/XRPLF/XRPL-Standards/discussions/39) format.

## Features

- Create, perform operations, and compare XFL format numbers.
- Support for high-precision numerical calculations.
- Implemented in TypeScript for type safety

## Installation

You can install using npm:

```bash
npm install xfl.js
```

## Usage

```javascript
import { make_xfl, add } from 'xfl.js';

const xfl_1 = make_xfl(12, 6345031894305479n);
const xfl_2 = make_xfl(17, 4478222822793996n);

const result = add(xfl_1, xfl_2);
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you have any questions or run into issues, please open an issue on the GitHub repository.
