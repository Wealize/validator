if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const getAllAllowedEnvironmentVariables = () => {
  return Object.entries(process.env).reduce(
    (vars, [name, value]) =>
      /^(?:__|NODE_)/.test(name) ? vars : { ...vars, [name]: value },
    {}
  )
}

const nextConfig = {
  env: {
    ...getAllAllowedEnvironmentVariables()
  }
}

module.exports = nextConfig
