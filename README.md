# Discord-Harder-Drive

## Storing Files On Discord For Free

[Live Demonstration](https://www.youtube.com/watch?v=5LNyzSN2rwA)

### How it works?

##### Upload:

1. The file is converted into a Buffer of Bytes
2. The Bytes Buffer is converted into a String of ucs-2 values
3. The String of ucs-2 values is saparated every 2,000 characters
(The maximum length of a Discord Message is 2,000 characters)
4. A Discord Channel is created for messages storing the ucs-2 values to be sent in
5. Discord Messages formed and sent from each element of the aforementioned array

<br>
**Hooray! We have uploaded a file to Discord!**

##### Download:

1. All messages from the Discord Channel in which the file is stored are fetched
2. The contents of the messages are joined into an Array
3. The array is joined into a long String
4. The String is converted into a Bytes Buffer
5. The Bytes Buffer is converted into a file
