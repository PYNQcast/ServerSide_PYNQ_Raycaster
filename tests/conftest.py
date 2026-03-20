from collections import defaultdict


_BENCHMARK_SUMMARY = defaultdict(dict)


def pytest_configure(config):
    _BENCHMARK_SUMMARY.clear()


def pytest_runtest_logreport(report):
    if report.when != "call" or report.failed:
        return

    props = getattr(report, "user_properties", ())
    if not props:
        return

    benchmark_props = {
        key: value
        for key, value in props
        if str(key).startswith("benchmark.")
    }
    if not benchmark_props:
        return

    _BENCHMARK_SUMMARY[report.nodeid].update(benchmark_props)


def pytest_terminal_summary(terminalreporter, exitstatus, config):
    summary = _BENCHMARK_SUMMARY
    if not summary:
        return

    terminalreporter.section("Benchmark Summary", sep="-", blue=True, bold=True)
    for nodeid in sorted(summary):
        terminalreporter.write_line(nodeid)
        for key, value in sorted(summary[nodeid].items()):
            label = key.removeprefix("benchmark.")
            terminalreporter.write_line(f"  {label}: {value}")
