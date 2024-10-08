import { CustomOpenMeteoError } from "./openMeteoAPI.ts";
import { CustomOpenWeatherError } from "./openWeatherAPI.ts";

export function isOpenMeteoError(err: unknown): err is CustomOpenMeteoError {
    return (
        typeof(err) === 'object' &&
        err !== null &&
        'api' in err &&
        'error' in err &&
        typeof(err.error) === 'boolean' &&
        'description' in err
    );
}

export function isOpenWeatherError(err: unknown): err is CustomOpenWeatherError {
    return (
        typeof(err) === 'object' &&
        err !== null &&
        'api' in err &&
        'error' in err &&
        typeof(err.error) === 'number' &&
        'description' in err
    );
  }