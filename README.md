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

- Load can be configured from the `artillery.ts` `config` property. Here are some important config points that change be
  set according to needs.
    1. A `phase` is a time period in your test that defines how virtual users are added — like a stage of your load test
       with specific rules (e.g., `warm up`, `peak load`, `ramp up`, `cool down`).
    2. `duration`: How long the test should run (in seconds).
    3. `arrivalRate`: How many new virtual users start per second.
    4. `arrivalCount`: Total number of virtual users to run in this phase.
    5. `rampTo`: Gradually increase the arrival rate to this number by the end of the phase.
    6. `startAfter`: Delay (in seconds) before starting this phase.
    7. `pause`: Wait time (in seconds) between phases.
    8. `maxVusers`: Maximum number of virtual users allowed at any time.
    9. `loopCount`: Number of times each user should repeat the scenario.
    10. `name`: A label for the phase (useful for identifying results).
- After running load test using the above commands one can monitor the CPU usage and memory usage
  on [grafana](https://grafana.faimer-monitoring.mekomsolutions.net/d/9IFafKA4z/openmrs-jmx-dashboard?orgId=1&from=now-3h&to=now&timezone=browser&var-job=OpenMRS-jvm-exporter&var-app=oz-faimer-dev.mekomsolutions.vpn:8088&var-node=&var-memarea=$__all&var-mempool=$__all)

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
