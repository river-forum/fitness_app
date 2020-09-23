# 実行に必要な各種変数の一覧
# Cloud runを実行するGoogle Project ID
#=========================#
# Google Cloud run基本設定
#=========================#
PROJECT_ID=XXXX
# デプロイするイメージ名
IMAGE=XXXX
# デプロイ名
DEPLOY_NAME=$(IMAGE)
# リージョン
REGION=asia-northeast1

# Cloud run 展開用のイメージをローカルビルド
app-image-build:
	docker build --no-cache=true -t gcr.io/$(PROJECT_ID)/$(IMAGE) -f Dockerfile .

# Cloud run ローカル確認用
app-image-run:
	docker run --rm -p 8080:8080 \
	-e NODE_ENV=development \
	gcr.io/$(PROJECT_ID)/$(IMAGE)

#========================================#
# ビルドと登録
#========================================#

# リモートでビルドしてレジストリーに登録
gcloud-app-build-submit:
	gcloud config set project $(PROJECT_ID)
	gcloud builds submit --tag gcr.io/$(PROJECT_ID)/$(IMAGE)


#========================================#
# 本番環境へのデプロイ
#========================================#

# 本番環境へデプロイ
gcloud-app-production-deploy:
	gcloud beta run deploy $(DEPLOY_NAME) \
      --project $(PROJECT_ID) \
      --image gcr.io/$(PROJECT_ID)/$(IMAGE) \
      --region $(REGION) \
      --platform managed \
      --set-env-vars NODE_ENV=production


# ビルド and Run for nxut
gcloud-app-build-and-run:
	make gcloud-app-build-submit
	make gcloud-app-production-deploy
