import './global.css'

import { Stack } from "expo-router";
import { verifyInstallation } from 'nativewind';

export default function RootLayout() {
  verifyInstallation();
  return <Stack />;
}
