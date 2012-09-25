all: bundle.zip

BUILD_PRODUCTS= \
				index.html \
				game.min.js \
				media
bake: 
	mkdir -p build/output
	cd tools && ./bake.sh
	cp -r ${BUILD_PRODUCTS} build/output/
	sed -i '' -f bake.sed build/output/index.html 

bundle.zip: bake
	cd build/output && zip -r ../bundle.zip *	
	
clean: 
	-rm -rf build
	-rm game.min.js
