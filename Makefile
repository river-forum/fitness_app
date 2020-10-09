.PHONY: act-lint
act-lint:
	act -j lint

.PHONY: act-test
act-test:
	act -j test

.PHONY: act-build-deploy
act-build-deploy:
	act -j build-deploy
