<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'carrolyn' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'iPOf7-?Kwar_w%:nP0xI3u]ZVPG-(Ahjb[{46XauO(yP,J|`yh(~Sn]fH:uMD$#s' );
define( 'SECURE_AUTH_KEY',  '23FQr9? *5]Bi `zjYnMDtyE%&?E&89v{_~aNhHn!`XZ %*WW2De.d2Qep,Il!zJ' );
define( 'LOGGED_IN_KEY',    'I.uR3U<uFWZQ16BKRH+<S&[0`ZR>S_?# ,1&~Y9@7~?)!fPLXN6+%.)3NifvG;zw' );
define( 'NONCE_KEY',        'x(oQ_nlMIF+@UoC!M8,s@iUX421^8x[zvO:[o3tW}YLMl~O7hkV;{+*}s]`<<:GV' );
define( 'AUTH_SALT',        '.,`h0^AzA?R+uQ@_pQ!P&7M$u$m PPgMckp 0{40c~T$:~{LYO]%<fhdzttvjX:z' );
define( 'SECURE_AUTH_SALT', ':#}e)xiLh9u!eV/O+LT7J^/9PEZzU1^oDRjoW$&i7WI{vXd]U!zNx_VZN6$TN}_`' );
define( 'LOGGED_IN_SALT',   'D$Q@q*Ne9(7VY9WHfp0,}h%sq!gv:,O930-Sr%(1xwr p|u3>;T8J] mD?{zU#Y8' );
define( 'NONCE_SALT',       'b&dC@d`#st_w.H6d7i1b{G5:}>.N5(U[NMs?)4_Qf:J5Z81}IF$k|0fvSiu]K]A+' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
