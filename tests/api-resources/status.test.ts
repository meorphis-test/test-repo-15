// File generated from our OpenAPI spec by Stainless.

import MeorphisTest29To1nbv from 'meorphis-test-29-to1nbv';
import { Response } from 'node-fetch';

const meorphisTest29To1nbv = new MeorphisTest29To1nbv({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource status', () => {
  test('retrieve', async () => {
    const responsePromise = meorphisTest29To1nbv.status.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(meorphisTest29To1nbv.status.retrieve({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      MeorphisTest29To1nbv.NotFoundError,
    );
  });
});
