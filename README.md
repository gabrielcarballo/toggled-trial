# Toggled iQ Playground 

## This project is an MVP LED Management System built with React Native and TypeScript. It allows users to control an LED light's power, temperature, and intensity.

## About

The objective of the Toggled Playground project is to mitigate barriers for potential users who may hesitate to invest in Toggled products due to concerns about usability. The target audience includes contractors, electricians, and operations managers across diverse industries

## Technology
The app was built using:
- Expo for ease of compatibility between iOS and Android.
- React Native framework.
- TypeScript for main programming language and Type security.
- JavaScript for running the app and the TypeScript compiled code.
- Babel

## Features
- Power Control: Users can toggle the LED light on and off.
- Temperature Control: Users can adjust the temperature of the LED light. The available options are 4000K, 5000K, and 6500K.
- Intensity Control: Users can adjust the intensity of the LED light.

## Components
- PowerControlCard: A reusable component for controlling the power of the LED light.
- TemperatureCard: A reusable component for controlling the temperature of the LED light.
- StackRouter: A wrapped Stack Router provided to the App, ensuring easy later screen redirections.
- Home: Component responsible for rendering the Home screen.
- LedManagement: Component responsible for rendering the LedManagement screen.

## Best Practices
This project follows best practices for React Native and TypeScript development:

- State Management: Uses React's useState hook for state management.
- Function Memoization: Uses React's useCallback hook to prevent unnecessary re-renders.
- Componentization: UI Components are broken down into reusable components.
- Type Safety: Uses TypeScript for type safety.
- Enum Safety: Uses Enum to receive props among TemperatureCard components safely.

## Future Improvements
- Move styles to a separate file.
- Build possibility to simulate LED Grow Tubes Toggled product.
- Build a chatbot with integration using GPT, fed by information from Toggled PDF products, to help users with installation or management.
- Add an element to redirect to a redirect to Toggled Store.
- Add an element to redirect to Contact Us on Toggled website.

