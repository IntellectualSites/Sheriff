while true
do
	node Sheriff.js
	echo "If you wish to completely stop the bot process now, press CMD-C before the time is up!"
	echo "Rebooting in:"
	for i in 5 4 3 2 1
	do
		echo "$i..."
		sleep 1
	done
	echo "Sheriff is now rebooting, please wait..."
done
