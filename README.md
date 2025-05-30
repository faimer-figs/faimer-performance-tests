<p align="center">
    <a href="https://docs.ozone-his.com/"><img src="https://raw.githubusercontent.com/ozone-his/.github/refs/heads/main/profile/ozone-logo.png" alt="Ozone" width="30%"/></a>
</p>

<h3 align="center">The Instant HIS</h3>

<p align="center">
    Welcome to Ozone's open-source repositories!
    <br/>Engage with the Ozone community and access useful resources below:
</p>

<h3 align="center">
    <a href="https://docs.ozone-his.com/">Docs</a>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://talk.openmrs.org/c/software/ozone-his/70">Forum</a>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://openmrs.slack.com/archives/C02PYQD5D0A">Chat Room</a>
</h3>


### Steps to run

Build the project & check `.env` file to configure the server endpoints
```bash
yarn install
```

Run load tests without generating report

```bash
artillery run load-test/artillery.ts
```

Run load tests with json report

```bash
artillery run load-test/artillery.ts -o report.json
```

If you want to visualise load test reports then create an account on https://www.artillery.io/ and generate an API key.
Then run

```bash
artillery run load-test/artillery.ts --record --key <API_KEY>
```
