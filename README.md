### Steps to run

Note: Keycloak should contain a user with credentials `testFaimer:Admin123` with role `FAIMER Learner`

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

----

### Configuring and Monitoring Performance

- Load can be configured from the `artillery.ts` `config` property. Here are some important config points that can be
  set according to needs.
  - A `phase` is a time period in your test that defines how virtual users are added — like a stage of your load test
         with specific rules (e.g., `warm up`, `peak load`, `ramp up`, `cool down`).
    - `duration`: How long the test should run (in seconds). 
    - `arrivalRate`: How many new virtual users start per second.
    - `arrivalCount`: Total number of virtual users to run in this phase.
    - `rampTo`: Gradually increase the arrival rate to this number by the end of the phase. 
    - `startAfter`: Delay before starting this phase (in seconds). 
    - `pause`: Wait time between phases (in seconds) .
    - `maxVusers`: Maximum number of virtual users allowed at any time.
    - `loopCount`: Number of times each user should repeat the scenario.
    - `name`: A label for the phase (useful for identifying results).
- After running load test using the above commands one can monitor the CPU and memory usage
  on a monitoring platform like Grafana.

------

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
