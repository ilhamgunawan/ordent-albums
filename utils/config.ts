import getConfig from "next/config"
import { NextConfig } from "next"

const { publicRuntimeConfig }: NextConfig = getConfig()

export interface Config {
  baseUrl: string
}

export function getAppConfig() {
  const config: Config = {
    baseUrl: publicRuntimeConfig?.baseUrl ?? "",
  }
  return config
}
